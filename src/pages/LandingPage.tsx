import { Greeting } from '@components/Greeting';
import { WorkTypes } from '@components/WorkTypes';
import { Header } from '@components/Header';

export function LandingPage() {
    return (
        <>
            <Header />
            <main>
                <Greeting />
                <WorkTypes />
            </main>
        </>
    );
}
