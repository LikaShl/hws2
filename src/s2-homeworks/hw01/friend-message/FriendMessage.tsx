import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";
import avatar from "../avatar.png"

// создать тип вместо any и отобразить приходящие данные
export type FriendsMessagePropsType = {
    message: MessageType
}
const FriendMessage = (props: FriendsMessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    src={avatar}
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        Igor
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        Hello, how are you, what did you do yesterday?
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                09.00
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
