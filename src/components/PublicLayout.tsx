import React from 'react';
import Header from './Header';

const PublicLayout = ({ content }: { content: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col ">
            <Header/>
            {content}
        </div>
    );
};

export default PublicLayout;