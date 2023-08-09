function MyProfileCard({ name, email, phone, facebook, github, linkedin }) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h3>{name}</h3>
          </div>
          <ul>
            <li className="mb-2">
              <a href={`mailto:${email}`} className="btn btn-primary">
                <i className="bi bi-envelope-open me-2"></i>
                {email}
                <i className="bi bi-envelope-open ms-2"></i>
              </a>
            </li>
            <li className="mb-2">
              <a href={`tel:${phone}`} className="btn btn-primary">
                <i className="bi bi-telephone me-2"></i>
                {phone}
              </a>
            </li>
            <li className="mb-2">
              <a href={`https://wa.me/${phone}`} className="btn btn-primary">
                <i class="bi bi-whatsapp me-2"></i>
                Send me a WhatsApp
              </a>
            </li>
            <li className="mb-2">
              <a href={facebook} className="btn btn-primary">
                <i class="bi bi-facebook me-2"></i>
                My Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href={github} className="btn btn-primary">
                <i class="bi bi-github me-2"></i>
                My GitHub
              </a>
            </li>
            <li className="mb-2">
              <a href={linkedin} className="btn btn-primary">
                <i class="bi bi-linkedin me-2"></i>
                My LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MyProfileCard;
