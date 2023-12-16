import '../assets/Cv.scss';
import React from 'react';

function Cv() {
    const pdfUrl = `/portfolio/edward_kaiser_cv.pdf`;

    return (
        <div className='cvPdf'>
            <iframe title="cv" src={pdfUrl} width="100%" height="600px"></iframe>
        </div>
    );
}

export default Cv;


