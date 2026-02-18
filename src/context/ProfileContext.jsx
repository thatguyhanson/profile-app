import { createContext, useContext, useState } from "react";
import hanson from '../assets/hanson.png';
import mako from '../assets/mako.jpg';
import milo from '../assets/milo.jpeg';
import huh from '../assets/confusedCat.jpeg';
import daBusDriver from '../assets/dabusdriver.png';
import kat from '../assets/katy.jpg';

const ProfileContext = createContext();

export default ProfileContext;

export const useProfileContext = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
    const [profiles, setProfiles] = useState([
        { id: 0, name: "Hanson", title: "Web Developer", email: "huan1826@purdue.edu", bio: "", image: hanson },
        { id: 1, name: "Mako", title: "Fat Cat", email: "mako@meow.com", bio: "meow.", image: mako },
        { id: 2, name: "Milo", title: "Hair Eater", email: "milo@meow.com", bio: "meow", image: milo },
        { id: 3, name: "Huh", title: "Confused Cat", email: "", bio: "", image: huh },
        { id: 4, name: "Da Bus Driver", title: "Bus Driver", email: "", bio: "", image: daBusDriver },
        { id: 5, name: "Dr. House", title: "Cat Owner", email: "", bio: "", image: kat }
    ]);

    const addProfile = (newProfile) => {
        setProfiles(prev => [...prev, newProfile]);
    };

    return (
        <ProfileContext.Provider value={{ profiles, addProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};