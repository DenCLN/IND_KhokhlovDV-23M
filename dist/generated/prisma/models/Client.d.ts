import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClientModel = runtime.Types.Result.DefaultSelection<Prisma.$ClientPayload>;
export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null;
    _min: ClientMinAggregateOutputType | null;
    _max: ClientMaxAggregateOutputType | null;
};
export type ClientMinAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
    dateOfBirth: Date | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClientMaxAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
    dateOfBirth: Date | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClientCountAggregateOutputType = {
    id: number;
    firstName: number;
    lastName: number;
    email: number;
    phone: number;
    dateOfBirth: number;
    notes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ClientMinAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    phone?: true;
    dateOfBirth?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClientMaxAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    phone?: true;
    dateOfBirth?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClientCountAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    phone?: true;
    dateOfBirth?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ClientAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    cursor?: Prisma.ClientWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClientCountAggregateInputType;
    _min?: ClientMinAggregateInputType;
    _max?: ClientMaxAggregateInputType;
};
export type GetClientAggregateType<T extends ClientAggregateArgs> = {
    [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClient[P]> : Prisma.GetScalarType<T[P], AggregateClient[P]>;
};
export type ClientGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithAggregationInput | Prisma.ClientOrderByWithAggregationInput[];
    by: Prisma.ClientScalarFieldEnum[] | Prisma.ClientScalarFieldEnum;
    having?: Prisma.ClientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClientCountAggregateInputType | true;
    _min?: ClientMinAggregateInputType;
    _max?: ClientMaxAggregateInputType;
};
export type ClientGroupByOutputType = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
    dateOfBirth: Date | null;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ClientCountAggregateOutputType | null;
    _min: ClientMinAggregateOutputType | null;
    _max: ClientMaxAggregateOutputType | null;
};
type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClientGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClientGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClientGroupByOutputType[P]>;
}>>;
export type ClientWhereInput = {
    AND?: Prisma.ClientWhereInput | Prisma.ClientWhereInput[];
    OR?: Prisma.ClientWhereInput[];
    NOT?: Prisma.ClientWhereInput | Prisma.ClientWhereInput[];
    id?: Prisma.StringFilter<"Client"> | string;
    firstName?: Prisma.StringFilter<"Client"> | string;
    lastName?: Prisma.StringFilter<"Client"> | string;
    email?: Prisma.StringFilter<"Client"> | string;
    phone?: Prisma.StringNullableFilter<"Client"> | string | null;
    dateOfBirth?: Prisma.DateTimeNullableFilter<"Client"> | Date | string | null;
    notes?: Prisma.StringNullableFilter<"Client"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Client"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Client"> | Date | string;
};
export type ClientOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.ClientWhereInput | Prisma.ClientWhereInput[];
    OR?: Prisma.ClientWhereInput[];
    NOT?: Prisma.ClientWhereInput | Prisma.ClientWhereInput[];
    firstName?: Prisma.StringFilter<"Client"> | string;
    lastName?: Prisma.StringFilter<"Client"> | string;
    phone?: Prisma.StringNullableFilter<"Client"> | string | null;
    dateOfBirth?: Prisma.DateTimeNullableFilter<"Client"> | Date | string | null;
    notes?: Prisma.StringNullableFilter<"Client"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Client"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Client"> | Date | string;
}, "id" | "email">;
export type ClientOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ClientCountOrderByAggregateInput;
    _max?: Prisma.ClientMaxOrderByAggregateInput;
    _min?: Prisma.ClientMinOrderByAggregateInput;
};
export type ClientScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClientScalarWhereWithAggregatesInput | Prisma.ClientScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClientScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClientScalarWhereWithAggregatesInput | Prisma.ClientScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Client"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"Client"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"Client"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Client"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Client"> | string | null;
    dateOfBirth?: Prisma.DateTimeNullableWithAggregatesFilter<"Client"> | Date | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Client"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Client"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Client"> | Date | string;
};
export type ClientCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string | null;
    dateOfBirth?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClientUncheckedCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string | null;
    dateOfBirth?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClientUpdateInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientUncheckedUpdateInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientCreateManyInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string | null;
    dateOfBirth?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClientUpdateManyMutationInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientUncheckedUpdateManyInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClientMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClientMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
    unset?: boolean;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
    unset?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ClientSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    phone?: boolean;
    dateOfBirth?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["client"]>;
export type ClientSelectScalar = {
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    phone?: boolean;
    dateOfBirth?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ClientOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "dateOfBirth" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>;
export type $ClientPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Client";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        dateOfBirth: Date | null;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["client"]>;
    composites: {};
};
export type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClientPayload, S>;
export type ClientCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClientCountAggregateInputType | true;
};
export interface ClientDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Client'];
        meta: {
            name: 'Client';
        };
    };
    findUnique<T extends ClientFindUniqueArgs>(args: Prisma.SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClientFindFirstArgs>(args?: Prisma.SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClientFindManyArgs>(args?: Prisma.SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClientCreateArgs>(args: Prisma.SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClientCreateManyArgs>(args?: Prisma.SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ClientDeleteArgs>(args: Prisma.SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClientUpdateArgs>(args: Prisma.SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClientDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClientUpdateManyArgs>(args: Prisma.SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ClientUpsertArgs>(args: Prisma.SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.ClientFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.ClientAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends ClientCountArgs>(args?: Prisma.Subset<T, ClientCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClientCountAggregateOutputType> : number>;
    aggregate<T extends ClientAggregateArgs>(args: Prisma.Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>;
    groupBy<T extends ClientGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClientGroupByArgs['orderBy'];
    } : {
        orderBy?: ClientGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClientFieldRefs;
}
export interface Prisma__ClientClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClientFieldRefs {
    readonly id: Prisma.FieldRef<"Client", 'String'>;
    readonly firstName: Prisma.FieldRef<"Client", 'String'>;
    readonly lastName: Prisma.FieldRef<"Client", 'String'>;
    readonly email: Prisma.FieldRef<"Client", 'String'>;
    readonly phone: Prisma.FieldRef<"Client", 'String'>;
    readonly dateOfBirth: Prisma.FieldRef<"Client", 'DateTime'>;
    readonly notes: Prisma.FieldRef<"Client", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Client", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Client", 'DateTime'>;
}
export type ClientFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    where: Prisma.ClientWhereUniqueInput;
};
export type ClientFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    where: Prisma.ClientWhereUniqueInput;
};
export type ClientFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    cursor?: Prisma.ClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientScalarFieldEnum | Prisma.ClientScalarFieldEnum[];
};
export type ClientFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    cursor?: Prisma.ClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientScalarFieldEnum | Prisma.ClientScalarFieldEnum[];
};
export type ClientFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    cursor?: Prisma.ClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientScalarFieldEnum | Prisma.ClientScalarFieldEnum[];
};
export type ClientCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientCreateInput, Prisma.ClientUncheckedCreateInput>;
};
export type ClientCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClientCreateManyInput | Prisma.ClientCreateManyInput[];
};
export type ClientUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientUpdateInput, Prisma.ClientUncheckedUpdateInput>;
    where: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClientUpdateManyMutationInput, Prisma.ClientUncheckedUpdateManyInput>;
    where?: Prisma.ClientWhereInput;
    limit?: number;
};
export type ClientUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateInput, Prisma.ClientUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClientUpdateInput, Prisma.ClientUncheckedUpdateInput>;
};
export type ClientDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    where: Prisma.ClientWhereUniqueInput;
};
export type ClientDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientWhereInput;
    limit?: number;
};
export type ClientFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type ClientAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type ClientDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
};
export {};
