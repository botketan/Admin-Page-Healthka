import React from 'react';
import { Document, Page } from 'react-pdf';

import PDF from './prescription.pdf';

export default function DisplayPdf() {
  return (
    <Document file={PDF}>
      <Page pageNumber={1} />
    </Document>
  );
}