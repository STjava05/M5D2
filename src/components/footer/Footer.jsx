import React, { Component } from 'react';
import '../footer/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';





class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="footer">
               <div>
                    <ul>
                    <p>© 2023 - All Rights Reserved</p>
                    <li><FontAwesomeIcon icon={faFacebook} /></li>

                        <li><FontAwesomeIcon icon={faTwitter} /></li>

                        <li><FontAwesomeIcon icon={faInstagram} /></li>

                    </ul>
                </div>
                

            </div>

        );
    }
}
export default Footer;