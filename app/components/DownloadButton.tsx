import React from "react";

const DownloadButton = () => {
    const downloadPdf = () => {
        // Create a link to the PDF file
        const pdfFile = "assets/services-portfolio.pdf";

        // Get the current date
        const currentDate = new Date();

        // Create a filename based on the current date
        const filename = `eastlube-portfolio-${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}.pdf`;

        // Create an invisible temporary anchor element
        const tempAnchor = document.createElement("a");
        tempAnchor.style.display = "none";
        tempAnchor.href = pdfFile;
        tempAnchor.setAttribute("download", filename);

        // Append the anchor element to the body and trigger a click event to start the download
        document.body.appendChild(tempAnchor);
        tempAnchor.click();

        // Clean up by removing the anchor element
        document.body.removeChild(tempAnchor);
    };

    return (
        <div className="w-56 sm:w-64 mx-2 md:pr-12 md:mx-16 lg:mx-32 text-white bg-black p-4 rounded-md border border-white hover:bg-white hover:text-black hover:border-black hover:shadow-md transition-all duration-300">
            <button onClick={downloadPdf}>Download Portfolio</button>
        </div>
    );
};

export default DownloadButton;
