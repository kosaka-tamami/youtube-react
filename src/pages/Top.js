import React, { useEffect } from "react";
import { fetchPopularData } from "../apis/index";
import Layout from "../components/Layout/Layout";

const Top = () => {
    useEffect(() => {
        fetchPopularData().then((res) => {
            console.log('data. res')
        })
    }, [])
    return (
        <Layout>
            top page
        </Layout>
    )
}

export default Top