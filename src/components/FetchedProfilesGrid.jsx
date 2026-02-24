import { memo } from 'react';
import { Link } from 'react-router-dom'
import Card from "./Card";

const FetchedProfilesGrid = memo(({ profiles }) => {
    return (
        <div className="grids">
            {profiles.length > 0 ? (
                profiles.map(profile => (
                    <Link key={profile.id} to={`/fetched-profiles/profile/${profile.id}`}>
                        <Card 
                            name={profile.name}
                            title={profile.title} 
                            image={profile.image_url} 
                        />
                    </Link>
                ))
            ) : (
                <p>No profiles found.</p>
            )}
        </div>
    );
});

FetchedProfilesGrid.displayName = 'FetchedProfilesGrid';

export default FetchedProfilesGrid;
