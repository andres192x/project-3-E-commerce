import React from 'react';
// Import the `useQuery()` hook from Apollo Client
import { useQuery } from '@apollo/client';

import ShirtList from '.';

// Import the query we are going to execute from its file
import { QUERY_SHIRTS } from '../../utils/queries';

const DisplayShirts = () => {
    // Execute the query on component load
    const { loading, data } = useQuery(QUERY_SHIRTS);

    // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
    const shirts = data?.findAllShirts || [];
console.log(data)
console.log(shirts)
    return (
        <main>
            <div className="flex-row justify-center">
                <div>
                <h3 className='product-header'>Products</h3>
                    {/* If the data is still loading, render a loading message */}
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <ShirtList
                            shirts={shirts}
                        />
                    )}
                </div>
            </div>
        </main>
    );
};

export default DisplayShirts;