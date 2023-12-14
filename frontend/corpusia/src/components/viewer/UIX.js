import './style/viewer.js';

function UIX() {
    return <UIX>
    <div class='bar'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1401" height="73" viewBox="0 0 1401 73" fill="none">
            <path d="M0 4V0H1401V73H384C379 73 375.5 71 373 69L300 9C293 3.5 289.5 4 280 4H0Z" fill="#FCFCFC" />
        </svg>
    </div>

    <div class='home_back_button'>

        <div class='home_button'>
            <button type="button"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                <path d="M9.96904 1.10663L9.96903 1.10664L1.10711 9.96723L1.1071 9.96724C1.03352 10.0408 0.975146 10.1282 0.935322 10.2243C0.895497 10.3205 0.875 10.4235 0.875 10.5276C0.875 10.6317 0.895497 10.7347 0.935322 10.8308C0.975146 10.927 1.03352 11.0143 1.1071 11.0879L1.19454 11.0005L1.1071 11.0879C1.25572 11.2365 1.45728 11.32 1.66745 11.32C1.77152 11.32 1.87457 11.2995 1.97071 11.2597C2.06686 11.2199 2.15421 11.1615 2.2278 11.0879L2.22787 11.0879L2.87567 10.4391V17.1937C2.87567 17.7572 3.09954 18.2977 3.49802 18.6962C3.89651 19.0947 4.43696 19.3185 5.00051 19.3185H16.9995C17.563 19.3185 18.1035 19.0947 18.502 18.6962C18.9005 18.2977 19.1243 17.7572 19.1243 17.1937V10.4391L19.7721 11.0879L19.7722 11.0879C19.9208 11.2365 20.1224 11.32 20.3325 11.32C20.5427 11.32 20.7443 11.2365 20.8929 11.0879C21.0415 10.9393 21.125 10.7378 21.125 10.5276C21.125 10.3174 21.0415 10.1158 20.8929 9.96724L20.8929 9.96722L17.7911 6.86676V2.52826C17.7911 2.31831 17.7077 2.11696 17.5592 1.9685C17.4108 1.82005 17.2094 1.73665 16.9995 1.73665H15.6663C15.4563 1.73665 15.255 1.82005 15.1065 1.9685C14.9581 2.11696 14.8747 2.31831 14.8747 2.52826V3.95034L12.031 1.10665L12.031 1.10663C11.7575 0.833261 11.3867 0.679688 11 0.679688C10.6133 0.679688 10.2425 0.833261 9.96904 1.10663ZM11 2.3144L17.5411 8.85551V17.1937C17.5411 17.3373 17.484 17.4751 17.3825 17.5767C17.2809 17.6782 17.1431 17.7353 16.9995 17.7353H5.00051C4.85686 17.7353 4.7191 17.6782 4.61753 17.5767C4.51596 17.4751 4.45889 17.3373 4.45889 17.1937V8.85551L11 2.3144Z" fill="#FCFCFC" stroke="#FCFCFC" stroke-width="0.25" />
            </svg></button>
        </div>

        <div class='back_button'>
            <button type="button"><h5>Go Back</h5><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none" id='arrow_back'>
                <path d="M2.94937 7.7L5.92559 4.72472L5.9256 4.72471C6.03824 4.61207 6.10153 4.4593 6.10153 4.3C6.10153 4.1407 6.03824 3.98793 5.9256 3.87529C5.81296 3.76265 5.66019 3.69937 5.50089 3.69937C5.3416 3.69937 5.18882 3.76265 5.07618 3.87529L1.07627 7.8752C1.07625 7.87522 1.07623 7.87524 1.07622 7.87526C1.02037 7.93098 0.976055 7.99717 0.945817 8.07004C0.91557 8.14293 0.9 8.22108 0.9 8.3C0.9 8.37892 0.91557 8.45707 0.945817 8.52996C0.976055 8.60283 1.02037 8.66902 1.07622 8.72474L1.07618 8.72471L1.14689 8.654L1.07627 8.7248L2.94937 7.7ZM2.94937 7.7H12.5009C12.8722 7.7 13.2283 7.5525 13.4908 7.28995C13.7534 7.0274 13.9009 6.6713 13.9009 6.3V1.5C13.9009 1.34087 13.9641 1.18826 14.0766 1.07574C14.1892 0.963214 14.3418 0.9 14.5009 0.9C14.66 0.9 14.8126 0.963214 14.9252 1.07574C15.0377 1.18826 15.1009 1.34087 15.1009 1.5V6.3C15.1009 6.64144 15.0336 6.97953 14.903 7.29498C14.7723 7.61042 14.5808 7.89705 14.3394 8.13848C14.0979 8.37991 13.8113 8.57142 13.4959 8.70209C13.1804 8.83275 12.8423 8.9 12.5009 8.9H2.94937M2.94937 7.7L2.94937 8.9M2.94937 8.9L2.84934 8.8L2.80792 8.9H2.94937Z" fill="#FCFCFC" stroke="#FCFCFC" stroke-width="0.2" />
            </svg></button>
        </div>;

    </div>
    </UIX>
}
export default UIX;