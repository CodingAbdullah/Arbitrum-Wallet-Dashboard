import { FC, FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import Alert from '../Alert/Alert';

const HomePageDescriptionSection: FC = () => {
    const walletAddress = useRef<HTMLInputElement>(null);
    const [alert, updateAlert] = useState<boolean>(false);

    const navigate = useNavigate();

    const formHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (walletAddress.current?.value.length !== 42 || walletAddress.current.value.substring(0, 2) !== '0x'){
            updateAlert(true);
        }
        else {
            updateAlert(false);
            localStorage.setItem('walletAddress', walletAddress.current!.value); // Set localStorage to this value if walletAddress has value and is valid
            navigate("/wallet-analytics-result"); // Navigate away to analytics page
        }   
    }

    // Decoupled from home page to make components leaner, functions passed down from parent as props
    return (
        <div className="jumbotron">
            <div className="container">
                <h1 style={{ marginBottom: '2rem' }}>Dashboard</h1>
                <hr />
                <p className='lead text-muted'><i>Anything you need to investigate on the Arbitrum blockchain is provided to you ready-made for free. <br /> 
                    Deep dive into collections, wallet information, and much more.</i></p>
                <p className='lead text-muted'><i>Enter the <b>public</b> address below (42-digit hex code) of a wallet to track activity. </i></p>
                { alert ? <Alert type="danger" /> : null }
                <form style={{ marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto', width: '50%' }} onSubmit={ (e) => formHandler(e) }>
                    <input className="form-control" type="search" ref={ walletAddress } placeholder="Enter Wallet Address (0xasx352e3dedwdse4u5F...)" max="42" min="42" aria-label="Search" required />
                    <button className="btn btn-outline-success wallet-search-button" type="submit">Search &raquo;</button>
                </form>
            </div>
        </div>
    )
}

export default HomePageDescriptionSection;