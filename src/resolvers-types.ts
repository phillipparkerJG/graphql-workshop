type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Bike = {
  id: Scalars['ID']
  make?: Maybe<Scalars['String']>
  color?: Maybe<Scalars['String']>
  season?: Maybe<Seasons>
}

export type Cyclist = {
  name?: Maybe<Scalars['String']>
  gender: Scalars['String']
  bike?: Maybe<Bike>
}

export type Query = {
  getCyclist?: Maybe<Cyclist>
}

export type QueryGetCyclistArgs = {
  name: Scalars['String']
}

export enum Seasons {
  Winter = 'WINTER',
  Summer = 'SUMMER',
}

import { GraphQLResolveInfo } from 'graphql'

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: Query
  String: Scalars['String']
  Cyclist: Cyclist
  Bike: Bike
  ID: Scalars['ID']
  Seasons: Seasons
  Boolean: Scalars['Boolean']
}

export type BikeResolvers<
  Context = any,
  ParentType = ResolversTypes['Bike']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, Context>
  make?: Resolver<Maybe<ResolversTypes['String']>, ParentType, Context>
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, Context>
  season?: Resolver<Maybe<ResolversTypes['Seasons']>, ParentType, Context>
}

export type CyclistResolvers<
  Context = any,
  ParentType = ResolversTypes['Cyclist']
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, Context>
  gender?: Resolver<ResolversTypes['String'], ParentType, Context>
  bike?: Resolver<Maybe<ResolversTypes['Bike']>, ParentType, Context>
}

export type QueryResolvers<
  Context = any,
  ParentType = ResolversTypes['Query']
> = {
  getCyclist?: Resolver<
    Maybe<ResolversTypes['Cyclist']>,
    ParentType,
    Context,
    QueryGetCyclistArgs
  >
}

export type Resolvers<Context = any> = {
  Bike?: BikeResolvers<Context>
  Cyclist?: CyclistResolvers<Context>
  Query?: QueryResolvers<Context>
}

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<Context = any> = Resolvers<Context>
