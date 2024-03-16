const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Cuentanos, en que te podemos ayudar?</h1>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Correo:</label>
                    <input type="email" id="email" className="form-input" placeholder="name@example.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="form-label">Descripción</label>
                    <textarea id="description" className="form-input form-textarea" placeholder="" />
                </div>
                <button type="submit" className="form-button">Enviar</button>
            </form>
        </div>
    )
}

export default Contact