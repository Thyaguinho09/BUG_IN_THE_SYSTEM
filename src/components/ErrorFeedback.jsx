export default function ErrorFeedback({ errorWord }) {
    if (!errorWord) return null;

    return (
        <div className="error-feedback">
            <span className="error-icon">✗</span>
            <span className="error-word">{errorWord}</span>
            <span className="error-msg">não está na lista!</span>
        </div>
    );
}
