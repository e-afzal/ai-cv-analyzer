import { useState, type FormEvent } from "react";

// LOCAL COMPONENT
import Navbar from "~/components/Navbar";
import FileUploader from "~/components/FileUploader";

const upload = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [file, setFile] = useState<File | null>(null);

  // HANDLER
  const handleFileSelect = (file: File | null) => {
    setFile(file);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget.closest("form");
    if (!form) return;
    const formData = new FormData(form);

    const companyName = formData.get("company-name");
    const jobTitle = formData.get("job-title");
    const jobDescription = formData.get("job-description");

    console.log({ companyName, jobTitle, jobDescription, file });
  };
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Smart feedback for your dream job</h1>
          {isProcessing ? (
            <>
              <h2>{statusText}</h2>
              <img src="/images/resume-scan.gif" className="w-full" />
            </>
          ) : (
            <h2>Drop your resume for an ATS score and improvement tips</h2>
          )}
          {!isProcessing && (
            <form
              action=""
              id="upload-form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 mt-8"
            >
              {/* INPUT: NAME */}
              <div className="form-div">
                <label htmlFor="company-name">Company name</label>
                <input
                  type="text"
                  name="company-name"
                  id="company-name"
                  placeholder="Company name"
                />
              </div>
              {/* INPUT: JOB TITLE */}
              <div className="form-div">
                <label htmlFor="job-title">Job title</label>
                <input
                  type="text"
                  name="job-title"
                  id="job-title"
                  placeholder="Job title"
                />
              </div>
              {/* INPUT: JOB DESCRIPTION */}
              <div className="form-div">
                <label htmlFor="job-title">Job description</label>
                <textarea
                  rows={5}
                  name="job-description"
                  id="job-description"
                  placeholder="Job description"
                />
              </div>
              {/* UPLOADER */}
              <div className="form-div">
                <label htmlFor="uploader">Upload resume</label>
                <FileUploader onFileSelect={handleFileSelect} />
              </div>
              <button className="primary-button" type="submit">
                Analyze resume
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default upload;
