import { memo } from 'react';
import Card from "../components/Card";

const ProfileGrid = memo(({ profiles }) => {
    return (
        <div className="grids">
            {profiles.map(profile => (
                <Card key={profile.id} {...profile} />
            ))}
        </div>
    );
});

ProfileGrid.displayName = 'ProfileGrid';

export default ProfileGrid;
