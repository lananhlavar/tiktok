import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8f4c076bd857dfa66695a1bc68762592~c5_100x100.jpeg?x-expires=1655262000&x-signature=gmTWL7Yrwx%2BS7y0nLeNtlOhmus8%3D"
                alt="Lan"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Tran Lan Anh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>tranlananh</span>
            </div>
        </div>
    );
}

export default AccountItem;
