import React from 'react';
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any +
export type MessageType = {
    id: number,
        user: {
        avatar: {
            url: string,
            width: number,
            height: number,
        }
            name: string,
        }
        message: {
        text: string,
            time: string
        }
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: {
            url: avatar,
            width: 150,
            height: 150
        }, // можно менять
        name: 'Brad Pitt',  // можно менять
    },
    message: {
        text: 'Hello. Lets go to the cinema ', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: {
            url: 'https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon-thumbnail.png',
            width: 150,
            height: 150,
        }, // можно менять +
        name: 'Me', // можно менять
    },
    message: {
        text: 'Sorry, I do my homework', // можно менять
        time: '22:01', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Hometask № 1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message}/>
            </div>
        </div>
    )
}

export default HW1
