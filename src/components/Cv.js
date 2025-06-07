import '../assets/Cv.scss';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Cv() {
    const [numPages, setNumPages] = useState(null);
    const pdfUrl = `${process.env.PUBLIC_URL}/edward_kaiser_cv.pdf`;

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className='cvPdf'>
            <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<p>Chargement du CV...</p>}
            >
                {Array.from({ length: numPages }, (_, index) => (
                    <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        width={800}
                        renderTextLayer={false}
                        />
                ))}
            </Document>
        </div>
    );
}

export default Cv;
