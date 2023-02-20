// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import './Collection.css'

import DisplayShirts from '../../Shirts/DisplayShirts';
import Shirts from '../../Shirts/index'

// const client = new ApolloClient({
//     uri: '/graphql',
//     cache: new InMemoryCache(),
//   });


export default function Collection() {
    return (
        // DISPLAY SHIRTS PAGE
        // <ApolloProvider client={client}>
            <div className="flex-column justify-flex-start min-100-vh">
                <DisplayShirts />
                <div>
                    <Shirts />
                </div>
            </div>
        // </ApolloProvider>
    )
}