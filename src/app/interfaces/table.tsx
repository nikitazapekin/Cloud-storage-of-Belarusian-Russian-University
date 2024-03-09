
export interface Element {
    id: number,
    correspondent: null | string,
    document_type: null | string,
    storage_path: number,
    title: string,
    content: string,
    tags: String[],
    created: string,
    created_date: string,
    modified: string,
    added: string,
    archive_serial_number: null | number,
    original_file_name: string,
    archived_file_name: string,
    owner: number,
    user_can_change: boolean,
    is_shared_by_requester: boolean,
    notes: String[],
    custom_fields: String[]
  }

  export type ResultsArray = Array<{
    id: number,
    correspondent: null | string,
    document_type: null | string,
    storage_path: number,
    title: string,
    content: string,
    tags: String[],
    created: string,
    created_date: string,
    modified: string,
    added: string,
    archive_serial_number: null | number,
    original_file_name: string,
    archived_file_name: string,
    owner: number,
    user_can_change: boolean,
    is_shared_by_requester: boolean,
    notes: String[],
    custom_fields: String[]
  }>
  