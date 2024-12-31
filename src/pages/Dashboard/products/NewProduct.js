import { useState } from "react";
import axios from "axios";

function NewProduct() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [accept, setaccept] = useState(false);
    console.log(image)
    async function submit(e) {
        setaccept(true)
        try {
                const formData = new FormData();
                formData.append= ("title", title);
                formData.append= ("description",description );
                formData.append= ("image",image );

                //send data
                let res = await axios.post('http://localhost:8000/products',
                    formData,
                    {
                        headers:{
                            'Content-Type':"multipart/form-data",
                        },
                    }
                );
                if (res.status === 201) {
                    window.location.pathname = "/"
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div style={{ flex: "1" }} >
            <form style={{ width: '100%' }} onSubmit={submit}>
                <label htmlFor="title"> Title : </label>
                <input
                    type="text"
                    id="title"
                    placeholder="Title..."
                    onChange={(e) => setTitle(e.target.value)}
                />
                {title.length < 1 && accept && <p className="error">title must be more than 2 char</p>}
                <label htmlFor="description"> Description : </label>
                <input
                    type="text"
                    id="description"
                    placeholder="Description..."
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <label htmlFor="image"> Image : </label>
                <input
                    type="file"
                    id="image"
                    placeholder="Image... "
                    onChange={(e) => setImage(e.target.files[0])}
                />
                {/*{pass.length < 8 && accept && <p className="error"> password must be more than 8 char</p>*/}
                <div style={{ textAlign: "center" }}>
                    <button style={{ width: '100%' }} type="submit">Create</button>
                </div>
            </form>
        </div>
    );
}

export default NewProduct;
