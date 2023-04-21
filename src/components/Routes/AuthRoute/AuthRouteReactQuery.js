import axios from 'axios';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';
import { refreshState } from '../../../atoms/Auth/AuthAtoms';
import { useRecoilState } from 'recoil';

const AuthRouteReactQuery = ({ path, element }) => {

    const [ refresh, setRefresh ] =useRecoilState(refreshState);
    const { data, isLoading } = useQuery(["authenticated"], async () => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:8080/auth/authenticated", {params: {accessToken}});
        return response;
    }, {
        enabled: refresh
    });

    useEffect(() => {
        if(!refresh) {
            setRefresh(true);
        }
    }, [refresh]);

    if(isLoading) {
        return (<div>로딩중...</div>);
    }

    if(!isLoading) {
        const permitAll = ["/login", "/register", "/password/forgot"];

        if(!data.data) {
            if(permitAll.includes(path)) {
                return element;
            }

            return <Navigate to="/login" />;
        }

        if(permitAll.includes(path)) {
            return <Navigate to="/" />;
        }

        return element;    
    }

};

export default AuthRouteReactQuery;