// Adding footer to project
import './footer.css';

const Footer = () => {
    const statement = "Copyright "  + new Date().getFullYear() + ". Powered By ";

    return (
        <footer className="pt-5 footer">
            <div className="container">
                <p className="copyright-paragraph">
                    <a style={{ color:'black' }} href="https://docs.alchemy.com/reference/" target="_blank" rel="noreferrer"><img style={{ marginRight: '0.15rem' }} src={require("../../assets/images/alchemy.png")} width="25" height="25" alt="logo" />Alchemy</a><span style={{ marginLeft: '0.25rem', marginRight: '0.25rem' }}><b>|</b></span>
                    <a style={{ color:'black' }} href="https://www.coingecko.com" target="_blank" rel="noreferrer"><img style={{ marginRight: '0.15rem' }} src={require("../../assets/images/coingecko.png")} width="25" height="25" alt="logo" />Coin Gecko</a><span style={{ marginLeft: '0.25rem', marginRight: '0.25rem' }}><b>|</b></span>
                    <a style={{ color:'black' }} href="https://arbiscan.io/" target="_blank" rel="noreferrer"><img src={require("../../assets/images/arb.png")} width="25" height="25" alt="logo" />Arbiscan</a><span style={{ marginLeft: '0.25rem', marginRight: '0.25rem' }}><b>|</b></span> 
                    <a style={{ color:'black' }} href="https://moralis.io/" target="_blank" rel="noreferrer"><img style={{ marginRight: '0.15rem' }} src={require("../../assets/images/moralis.png")} width="25" height="25" alt="logo" />Moralis</a><span style={{ marginLeft: '0.25rem', marginRight: '0.25rem' }}></span>
                </p>
                <p className="copyright-paragraph">{ statement } <a style={{ color: 'black' }} href="https://reactjs.org/">React</a><img className="footer-logo" src={require("../../assets/images/logo.svg").default} alt="logo" /></p>
            </div>
        </footer>
    )
}

export default Footer;