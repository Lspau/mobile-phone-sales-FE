import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = ({ history }) => {
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);
    useEffect(() => {
        if (isAuthenticated === false) {
            history.push("/login");
        }
    }, [history, isAuthenticated]);
    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <MetaData title={`${user.name}'s Profile`} />
                    <div className="profileContainer">
                        <div>
                            <h1>Thông tin cá nhân</h1>
                            {user.avatar.map((item) => (
                                <div key={item.url} >
                                    <img className="profileContainer2" src={item.url} alt={user.name} />
                                </div>
                            ))}
                            <Link to="/me/update">Chỉnh sửa</Link>
                        </div>
                        <div>
                            <div>
                                <h4>Họ và Tên:</h4>
                                <p>{user.name}</p>
                            </div>
                            <div>
                                <h4>Email:</h4>
                                <p>{user.email}</p>
                            </div>
                            <div>
                                <h4>Ngày tạo:</h4>
                                <p>{String(user.createdAt).substr(0, 10)}</p>
                            </div>

                            <div>
                                <Link to="/orders">Đơn hàng</Link>
                                <Link to="/password/update">Thay đổi mật khẩu</Link>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
            }
        </Fragment >
    );
};


export default Profile;