import React from "react";
import { Link, graphql } from "gatsby";
//import StyleWrapper from "../components/StyleWrapper";
import Layout from "../components/layout/Layout";
export default function Index({data,my}) {
//data prop is fixed "data" for query graphql mapping , cannot be changed 
    const {
        site: {
          siteMetadata: { name, role },
        },
      } = data;
    return (
        <Layout>
        <div className="max-w-5xl mx-auto py-16lg:py-24">
            <h1 className="text-4xl md:text-6xl font-bold text-black pb-4">{name}</h1>
            <p className="mb-4">{role}</p>
            <Link to="/about" className="btn">About Me</Link>
        </div>
        </Layout>
    );
};
//You can only export one query per component.
export const query = graphql `
    {
        site {
            siteMetadata {
                name 
                role
            }
        }
    }
`;
