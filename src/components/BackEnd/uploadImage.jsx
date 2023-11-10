import {storage} from "../../../firebaseConfig"

const uploadPostImage = (file) =>{
    const produtoImageRef = ref(storage, `postImages/${file.name}`);
    const uploadTask = uploadBytesResumable(produtoImageRef, file)
    uploadTask.on("state_changed", 
    (snapshot) =>{
        const progress = Math.round(
            snapshot.bytesTransferred / snapshot.totalBytes * 100
            );
            //setProgress(progress)
            console.log(progress)
    }, 
    (error)=>{
        console.error(error)
    }, ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((response)=>{
            setPostImage(response)

        })
    
    }
    )

}

export default uploadPostImage