import firebase from '../firebase/client';

export const imageUplodaer = (
  image,
  formData,
  setLoading,
  setImage,
  setFormData
) => {
  setLoading(true);
  const db = firebase.firestore();
  // sube imagen a firebase storage y devuelve url
  const storageRef = firebase.storage().ref(`/cajas/${image.name}`);
  const task = storageRef.put(image);
  task.on(
    'state_changed',
    (snapshot) => {
      console.log('snapshot: ', snapshot);
    },
    (error) => {
      console.log('error guardando la imagen: ', error.message);
      setLoading(false);
    },
    () => {
      task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        const doc = {
          ...formData,
          imageUrl: downloadURL,
          date: Date.now(),
        };

        db.collection('productos')
          .add(doc)
          .then(() => {
            setFormData({ title: '', description: '', price: '' });
            setImage(null);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      });
    }
  );
};
