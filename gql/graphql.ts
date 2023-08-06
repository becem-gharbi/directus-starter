/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** ISO8601 Date values */
  Date: { input: any; output: any; }
  /** A Float or a String */
  GraphQLStringOrFloat: { input: any; output: any; }
  /** Hashed string values */
  Hash: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Mutation = {
  __typename?: 'Mutation';
  update_counter?: Maybe<Counter>;
};


export type MutationUpdate_CounterArgs = {
  data: Update_Counter_Input;
};

export type Query = {
  __typename?: 'Query';
  counter?: Maybe<Counter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  counter_mutated?: Maybe<Counter_Mutated>;
  directus_files_mutated?: Maybe<Directus_Files_Mutated>;
  directus_users_mutated?: Maybe<Directus_Users_Mutated>;
};


export type SubscriptionCounter_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Users_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Counter = {
  __typename?: 'counter';
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  value?: Maybe<Scalars['Int']['output']>;
};

export type Counter_Mutated = {
  __typename?: 'counter_mutated';
  data?: Maybe<Counter>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']['output']>;
  hour?: Maybe<Scalars['Int']['output']>;
  minute?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  second?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
  weekday?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  filename_disk?: Maybe<Scalars['String']['output']>;
  filename_download: Scalars['String']['output'];
  filesize?: Maybe<Scalars['Int']['output']>;
  folder?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Directus_Users>;
  modified_on?: Maybe<Scalars['Date']['output']>;
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uploaded_by?: Maybe<Directus_Users>;
  uploaded_on?: Maybe<Scalars['Date']['output']>;
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']['output']>;
};


export type Directus_FilesModified_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<Number_Filter_Operators>;
  folder?: InputMaybe<String_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<Directus_Users_Filter>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<Directus_Users_Filter>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Mutated = {
  __typename?: 'directus_files_mutated';
  data?: Maybe<Directus_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Users = {
  __typename?: 'directus_users';
  avatar?: Maybe<Directus_Files>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  last_access?: Maybe<Scalars['Date']['output']>;
  last_access_func?: Maybe<Datetime_Functions>;
  last_name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['Hash']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};


export type Directus_UsersAvatarArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  avatar?: InputMaybe<Directus_Files_Filter>;
  email?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  last_access?: InputMaybe<Date_Filter_Operators>;
  last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  password?: InputMaybe<Hash_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  role?: InputMaybe<String_Filter_Operators>;
};

export type Directus_Users_Mutated = {
  __typename?: 'directus_users_mutated';
  data?: Maybe<Directus_Users>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Hash_Filter_Operators = {
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _icontains?: InputMaybe<Scalars['String']['input']>;
  _iends_with?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['String']['input']>;
  _ncontains?: InputMaybe<Scalars['String']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _niends_with?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['String']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['String']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Counter_Input = {
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type GetCounterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCounterQuery = { __typename?: 'Query', counter?: { __typename?: 'counter', value?: number | null } | null };

export type SubscribeCounterSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeCounterSubscription = { __typename?: 'Subscription', counter_mutated?: { __typename?: 'counter_mutated', data?: { __typename?: 'counter', value?: number | null } | null } | null };

export type UpdateCounterMutationVariables = Exact<{
  value?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UpdateCounterMutation = { __typename?: 'Mutation', update_counter?: { __typename?: 'counter', value?: number | null } | null };


export const GetCounterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCounter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"counter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetCounterQuery, GetCounterQueryVariables>;
export const SubscribeCounterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SubscribeCounter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"counter_mutated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<SubscribeCounterSubscription, SubscribeCounterSubscriptionVariables>;
export const UpdateCounterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCounter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_counter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<UpdateCounterMutation, UpdateCounterMutationVariables>;