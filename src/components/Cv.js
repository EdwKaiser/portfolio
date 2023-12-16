import '../assets/Cv.scss'
import React from 'react';



function Cv() {
    const pdfUrl = 'portfolio/edward_Kaiser_cv.pdf';

    return (
        <div className='cvPdf'>
             <embed className="cv" src={pdfUrl} type="application/pdf" />
        </div>
    );
}

export default Cv;