import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container } from 'react-bootstrap';

export default function Jumbo() {
    return (
        <div className="container-fluid">
            <Jumbotron fluid className="bg-theme">
                <Container>
                    <h1>About me</h1>
                    <h4>
                        I am a volunteer doing my part in the fight against the
                        coronavirus. I would love it if my application helps in
                        the fight against this virus. #StaySafe #StayHealthy
                    </h4>
                </Container>
            </Jumbotron>
        </div>
    );
}
