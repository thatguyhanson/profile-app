import { useState } from "react";
import styles from './profileform.module.css';
import { useNavigate } from "react-router-dom";

const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+>/g, "");
const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, " ");

export default function ProfileFor({ onAddProfile }) {

    const Navigate = useNavigate();

    const [values, setValues] = useState({ name: "", title: "", email: "", bio: "", image: null });
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [success, setSuccess] = useState(false);

    const { name, title, email, bio, image } = values;

    const handleChange = (event) => {
        const { name, value, files } = event.target;

        if (name === "image") {
            const file = files[0];
            if (file && file.size < 1024 * 1024) {
                setValues(prev => ({ ...prev, image: file }));
                setError("");
            } else {
                setError("Image should be less than 1 MB.");
                setValues(prev => ({ ...prev, image: null }));
            }
        } else {
            setValues(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        try {
            if (!image) {
                setError("Please upload an image.");
                setSubmitted(false);
                return;
            }

            if (!stripTags(trimCollapse(name))
                || !stripTags(trimCollapse(title))
                || !stripTags(trimCollapse(email))
                || !stripTags(trimCollapse(bio))) {
                setError("Please fill in name, title, e-mail, and description.");
                return;
            }
            const cleanedData = {
                id: Date.now(),
                name: stripTags(trimCollapse(name)),
                title: stripTags(trimCollapse(title)),
                email: stripTags(trimCollapse(email)),
                bio: stripTags(trimCollapse(bio)),
                image: URL.createObjectURL(image)
            }

            onAddProfile(cleanedData);

            setValues({ name: "", title: "", email: "", bio: "", image: null });
            setError("");

            event.target.reset();

            setSuccess("Form is submitted successfully");
            setTimeout(() => {
                setSuccess("");
                Navigate("/")
            }, 1000);
        } catch (error) {
            setError(error.message);
        } finally {
            setSubmitted(false);
        }
    }

    const disabled = !stripTags(trimCollapse(name))
        || !stripTags(trimCollapse(title))
        || !stripTags(trimCollapse(email))
        || !stripTags(trimCollapse(bio))
        || submitted
        || error;

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.profileForm}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" required value={name} onChange={handleChange} />

                <label htmlFor="email">Email</label>
                <input id="email" name="email" required value={email} onChange={handleChange} />

                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" required value={title} onChange={handleChange} />

                <label htmlFor="bio">Bio</label>
                <textarea id="bio" name="bio" value={bio} maxLength={200} onChange={handleChange} />

                <label htmlFor="image">Upload a profile image:</label>
                <input id="image" name="image" type="file" accept="image/*" required onChange={handleChange} />

                <button disabled={disabled}>Submit</button>
                {error && <p className={styles.error}>{error}</p>}
                {success && <p className={styles.success}>{success}</p>}
            </form>
        </div>
    );
}