// Adding custom type for ERC721 Transfers
export default interface ERC721TransfersType {
    transfers: {
        total: number,
        page: number,
        page_size: number,
        cursor: string,
        result: {
            block_number: string,
            block_timestamp: string,
            block_hash: string,
            transaction_hash: string,
            transaction_index: number,
            log_index: number,
            value: string,
            contract_type: string,
            transaction_type: string,
            token_address: string,
            token_id: string,
            from_address: string,
            to_address: string,
            amount: string,
            verified: number,
            operator: string
        }[],
        block_exists: boolean
    }
}