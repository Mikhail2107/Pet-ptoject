import { Header } from "../widgets";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../app/store/store';

describe('Headers test for show MobileMenu', () => {
    test('onClick on button', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </Provider>
        );
        const btn = screen.getByTestId('menu-mobile-btn');
        expect(screen.queryByTestId("menu-mobile")).toBeNull();
        fireEvent.click(btn);
        const mobileMenu = screen.queryByTestId("menu-mobile") as HTMLElement | null;
        expect(mobileMenu).toBeTruthy();
        fireEvent.click(btn);
        expect(screen.queryByTestId("menu-mobile")).toBeNull();
        fireEvent.click(btn);
    })
})