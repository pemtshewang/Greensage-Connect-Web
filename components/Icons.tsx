import { BarChart4Icon, BookKeyIcon, CameraIcon, CheckCircleIcon, EyeIcon, EyeOffIcon, FilePlus2Icon, HelpCircle, InfoIcon, KeyIcon, Loader2Icon, LogOutIcon, MapPin, MoonIcon, NewspaperIcon, PanelLeftCloseIcon, PanelLeftIcon, PanelLeftOpenIcon, PanelRightClose, PencilIcon, SettingsIcon, SunIcon, TargetIcon, TrashIcon, UserCheckIcon, UserRoundIcon, UsersRoundIcon } from "lucide-react";

const Icons = {
    eyeOn: EyeIcon,
    eyeOff: EyeOffIcon,
    spinner: Loader2Icon,
    drawerOpen: PanelLeftOpenIcon,
    drawerClose: PanelLeftCloseIcon,
    newspaper: NewspaperIcon,
    usersGroup: UsersRoundIcon,
    settings: SettingsIcon,
    logout: LogOutIcon,
    addNews: FilePlus2Icon,
    token: KeyIcon,
    info: InfoIcon,
    generate: BookKeyIcon,
    check: CheckCircleIcon,
    moon: MoonIcon,
    sun: SunIcon,
    camera: CameraIcon,
    post: NewspaperIcon,
    trash: TrashIcon,
    pencil: PencilIcon,
    drawer: PanelRightClose,
    loader2: Loader2Icon,
    help: HelpCircle,
    usersJoined: UserCheckIcon,
    mapPin: MapPin,
    userRound: UserRoundIcon,
    overview: TargetIcon,
    dashboard: BarChart4Icon,
    emptyUsers: (props) => {
        return (
            <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.5001 12C20.5377 12 23.0001 14.4624 23.0001 17.5C23.0001 20.5376 20.5377 23 17.5001 23C14.4626 23 12.0001 20.5376 12.0001 17.5C12.0001 14.4624 14.4626 12 17.5001 12ZM17.5001 19.751C17.1552 19.751 16.8756 20.0306 16.8756 20.3755C16.8756 20.7204 17.1552 21 17.5001 21C17.845 21 18.1246 20.7204 18.1246 20.3755C18.1246 20.0306 17.845 19.751 17.5001 19.751ZM17.5002 13.8741C16.4522 13.8741 15.6359 14.6915 15.6468 15.8284C15.6494 16.1045 15.8754 16.3262 16.1516 16.3236C16.4277 16.3209 16.6494 16.0949 16.6467 15.8188C16.6412 15.2398 17.0064 14.8741 17.5002 14.8741C17.9725 14.8741 18.3536 15.266 18.3536 15.8236C18.3536 16.0158 18.2983 16.1659 18.1296 16.3851L18.0356 16.501L17.9366 16.6142L17.6712 16.9043L17.5348 17.0615C17.1515 17.5182 17.0002 17.854 17.0002 18.3716C17.0002 18.6477 17.224 18.8716 17.5002 18.8716C17.7763 18.8716 18.0002 18.6477 18.0002 18.3716C18.0002 18.1684 18.0587 18.0126 18.239 17.7813L18.3239 17.6772L18.4249 17.5618L18.6906 17.2713L18.8252 17.1162C19.2035 16.6654 19.3536 16.333 19.3536 15.8236C19.3536 14.7199 18.5312 13.8741 17.5002 13.8741ZM12.0224 13.9993C11.7257 14.4626 11.4862 14.966 11.3137 15.4996L4.25254 15.4999C3.83895 15.4999 3.50366 15.8352 3.50366 16.2488V16.8265C3.50366 17.3622 3.69477 17.8802 4.04263 18.2876C5.29594 19.7553 7.26182 20.5011 10.0001 20.5011C10.5966 20.5011 11.1564 20.4657 11.6804 20.3952C11.9255 20.8901 12.2331 21.3486 12.5919 21.7615C11.7964 21.9217 10.9315 22.0011 10.0001 22.0011C6.85426 22.0011 4.46825 21.0959 2.90194 19.2617C2.32218 18.5828 2.00366 17.7193 2.00366 16.8265V16.2488C2.00366 15.0068 3.01052 13.9999 4.25254 13.9999L12.0224 13.9993ZM10.0001 2.00464C12.7615 2.00464 15.0001 4.24321 15.0001 7.00464C15.0001 9.76606 12.7615 12.0046 10.0001 12.0046C7.2387 12.0046 5.00012 9.76606 5.00012 7.00464C5.00012 4.24321 7.2387 2.00464 10.0001 2.00464ZM10.0001 3.50464C8.06712 3.50464 6.50012 5.07164 6.50012 7.00464C6.50012 8.93764 8.06712 10.5046 10.0001 10.5046C11.9331 10.5046 13.5001 8.93764 13.5001 7.00464C13.5001 5.07164 11.9331 3.50464 10.0001 3.50464Z" fill="#A0A0A0"></path> </g></svg>
        )
    }
}

export default Icons;
