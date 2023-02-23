

import './Collection.css'

import DisplayShirts from '../../Shirts/DisplayShirts';
import Shirts from '../../Shirts/index'



export default function Collection() {
    return (
        // DISPLAY SHIRTS PAGE
        // <ApolloProvider client={client}>
            <div className="flex-column justify-flex-start min-100-vh">
                <DisplayShirts />

            </div>
        // </ApolloProvider>
    )
}