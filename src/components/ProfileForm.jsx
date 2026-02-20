import { useReducer } from "react";
import styles from './profileform.module.css';
import { useNavigate } from "react-router-dom";

const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+>/g, "");
const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, " ");

// Reducer function to manage complex form state
const formReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                values: { ...state.values, [action.field]: action.payload }
            };
        case 'UPDATE_IMAGE':
            return {
                ...state,
                values: { ...state.values, image: action.payload }
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        case 'SET_SUBMITTED':
            return {
                ...state,
                submitted: action.payload
            };
        case 'SET_SUCCESS':
            return {
                ...state,
                success: action.payload
            };
        case 'RESET_FORM':
            return {
                values: { name: "", title: "", email: "", bio: "", image: null },
                error: "",
                submitted: false,
                success: ""
            };
        default:
            return state;
    }
};

export default function ProfileFor({ onAddProfile }) {

    const Navigate = useNavigate();

    // Initial state for the form
    const initialState = {
        values: { name: "", title: "", email: "", bio: "", image: null },
        error: "",
        submitted: false,
        success: ""
    };

    const [state, dispatch] = useReducer(formReducer, initialState);
    const { values, error, submitted, success } = state;
    const { name, title, email, bio, image } = values;

    const handleChange = (event) => {
        const { name, value, files } = event.target;

        if (name === "image") {
            const file = files[0];
            if (file && file.size < 1024 * 1024) {
                dispatch({ type: 'UPDATE_IMAGE', payload: file });
                dispatch({ type: 'SET_ERROR', payload: "" });
            } else {
                dispatch({ type: 'SET_ERROR', payload: "Image should be less than 1 MB." });
                dispatch({ type: 'UPDATE_IMAGE', payload: null });
            }
        } else {
            dispatch({ type: 'UPDATE_FIELD', field: name, payload: value });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_SUBMITTED', payload: true });
        try {
            if (!image) {
                dispatch({ type: 'SET_ERROR', payload: "Please upload an image." });
                dispatch({ type: 'SET_SUBMITTED', payload: false });
                return;
            }

            if (!stripTags(trimCollapse(name))
                || !stripTags(trimCollapse(title))
                || !stripTags(trimCollapse(email))
                || !stripTags(trimCollapse(bio))) {
                dispatch({ type: 'SET_ERROR', payload: "Please fill in name, title, e-mail, and description." });
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

            dispatch({ type: 'RESET_FORM' });

            event.target.reset();

            dispatch({ type: 'SET_SUCCESS', payload: "Form is submitted successfully" });
            setTimeout(() => {
                dispatch({ type: 'SET_SUCCESS', payload: "" });
                Navigate("/")
            }, 1000);
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: error.message });
        } finally {
            dispatch({ type: 'SET_SUBMITTED', payload: false });
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