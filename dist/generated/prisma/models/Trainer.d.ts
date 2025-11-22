import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TrainerModel = runtime.Types.Result.DefaultSelection<Prisma.$TrainerPayload>;
export type AggregateTrainer = {
    _count: TrainerCountAggregateOutputType | null;
    _avg: TrainerAvgAggregateOutputType | null;
    _sum: TrainerSumAggregateOutputType | null;
    _min: TrainerMinAggregateOutputType | null;
    _max: TrainerMaxAggregateOutputType | null;
};
export type TrainerAvgAggregateOutputType = {
    experienceYears: number | null;
};
export type TrainerSumAggregateOutputType = {
    experienceYears: number | null;
};
export type TrainerMinAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
    specialization: string | null;
    experienceYears: number | null;
    about: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TrainerMaxAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
    specialization: string | null;
    experienceYears: number | null;
    about: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TrainerCountAggregateOutputType = {
    id: number;
    firstName: number;
    lastName: number;
    email: number;
    phone: number;
    specialization: number;
    experienceYears: number;
    about: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TrainerAvgAggregateInputType = {
    experienceYears?: true;
};
export type TrainerSumAggregateInputType = {
    experienceYears?: true;
};
export type TrainerMinAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    phone?: true;
    specialization?: true;
    experienceYears?: true;
    about?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TrainerMaxAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    phone?: true;
    specialization?: true;
    experienceYears?: true;
    about?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TrainerCountAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    phone?: true;
    specialization?: true;
    experienceYears?: true;
    about?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TrainerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrainerWhereInput;
    orderBy?: Prisma.TrainerOrderByWithRelationInput | Prisma.TrainerOrderByWithRelationInput[];
    cursor?: Prisma.TrainerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TrainerCountAggregateInputType;
    _avg?: TrainerAvgAggregateInputType;
    _sum?: TrainerSumAggregateInputType;
    _min?: TrainerMinAggregateInputType;
    _max?: TrainerMaxAggregateInputType;
};
export type GetTrainerAggregateType<T extends TrainerAggregateArgs> = {
    [P in keyof T & keyof AggregateTrainer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTrainer[P]> : Prisma.GetScalarType<T[P], AggregateTrainer[P]>;
};
export type TrainerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrainerWhereInput;
    orderBy?: Prisma.TrainerOrderByWithAggregationInput | Prisma.TrainerOrderByWithAggregationInput[];
    by: Prisma.TrainerScalarFieldEnum[] | Prisma.TrainerScalarFieldEnum;
    having?: Prisma.TrainerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TrainerCountAggregateInputType | true;
    _avg?: TrainerAvgAggregateInputType;
    _sum?: TrainerSumAggregateInputType;
    _min?: TrainerMinAggregateInputType;
    _max?: TrainerMaxAggregateInputType;
};
export type TrainerGroupByOutputType = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
    specialization: string;
    experienceYears: number;
    about: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TrainerCountAggregateOutputType | null;
    _avg: TrainerAvgAggregateOutputType | null;
    _sum: TrainerSumAggregateOutputType | null;
    _min: TrainerMinAggregateOutputType | null;
    _max: TrainerMaxAggregateOutputType | null;
};
type GetTrainerGroupByPayload<T extends TrainerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TrainerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TrainerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TrainerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TrainerGroupByOutputType[P]>;
}>>;
export type TrainerWhereInput = {
    AND?: Prisma.TrainerWhereInput | Prisma.TrainerWhereInput[];
    OR?: Prisma.TrainerWhereInput[];
    NOT?: Prisma.TrainerWhereInput | Prisma.TrainerWhereInput[];
    id?: Prisma.StringFilter<"Trainer"> | string;
    firstName?: Prisma.StringFilter<"Trainer"> | string;
    lastName?: Prisma.StringFilter<"Trainer"> | string;
    email?: Prisma.StringFilter<"Trainer"> | string;
    phone?: Prisma.StringNullableFilter<"Trainer"> | string | null;
    specialization?: Prisma.StringFilter<"Trainer"> | string;
    experienceYears?: Prisma.IntFilter<"Trainer"> | number;
    about?: Prisma.StringNullableFilter<"Trainer"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Trainer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Trainer"> | Date | string;
};
export type TrainerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    specialization?: Prisma.SortOrder;
    experienceYears?: Prisma.SortOrder;
    about?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TrainerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.TrainerWhereInput | Prisma.TrainerWhereInput[];
    OR?: Prisma.TrainerWhereInput[];
    NOT?: Prisma.TrainerWhereInput | Prisma.TrainerWhereInput[];
    firstName?: Prisma.StringFilter<"Trainer"> | string;
    lastName?: Prisma.StringFilter<"Trainer"> | string;
    phone?: Prisma.StringNullableFilter<"Trainer"> | string | null;
    specialization?: Prisma.StringFilter<"Trainer"> | string;
    experienceYears?: Prisma.IntFilter<"Trainer"> | number;
    about?: Prisma.StringNullableFilter<"Trainer"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Trainer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Trainer"> | Date | string;
}, "id" | "email">;
export type TrainerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    specialization?: Prisma.SortOrder;
    experienceYears?: Prisma.SortOrder;
    about?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TrainerCountOrderByAggregateInput;
    _avg?: Prisma.TrainerAvgOrderByAggregateInput;
    _max?: Prisma.TrainerMaxOrderByAggregateInput;
    _min?: Prisma.TrainerMinOrderByAggregateInput;
    _sum?: Prisma.TrainerSumOrderByAggregateInput;
};
export type TrainerScalarWhereWithAggregatesInput = {
    AND?: Prisma.TrainerScalarWhereWithAggregatesInput | Prisma.TrainerScalarWhereWithAggregatesInput[];
    OR?: Prisma.TrainerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TrainerScalarWhereWithAggregatesInput | Prisma.TrainerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Trainer"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"Trainer"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"Trainer"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Trainer"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Trainer"> | string | null;
    specialization?: Prisma.StringWithAggregatesFilter<"Trainer"> | string;
    experienceYears?: Prisma.IntWithAggregatesFilter<"Trainer"> | number;
    about?: Prisma.StringNullableWithAggregatesFilter<"Trainer"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Trainer"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Trainer"> | Date | string;
};
export type TrainerCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string | null;
    specialization: string;
    experienceYears?: number;
    about?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TrainerUncheckedCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string | null;
    specialization: string;
    experienceYears?: number;
    about?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TrainerUpdateInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialization?: Prisma.StringFieldUpdateOperationsInput | string;
    experienceYears?: Prisma.IntFieldUpdateOperationsInput | number;
    about?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainerUncheckedUpdateInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialization?: Prisma.StringFieldUpdateOperationsInput | string;
    experienceYears?: Prisma.IntFieldUpdateOperationsInput | number;
    about?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainerCreateManyInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string | null;
    specialization: string;
    experienceYears?: number;
    about?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TrainerUpdateManyMutationInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialization?: Prisma.StringFieldUpdateOperationsInput | string;
    experienceYears?: Prisma.IntFieldUpdateOperationsInput | number;
    about?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainerUncheckedUpdateManyInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialization?: Prisma.StringFieldUpdateOperationsInput | string;
    experienceYears?: Prisma.IntFieldUpdateOperationsInput | number;
    about?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    specialization?: Prisma.SortOrder;
    experienceYears?: Prisma.SortOrder;
    about?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TrainerAvgOrderByAggregateInput = {
    experienceYears?: Prisma.SortOrder;
};
export type TrainerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    specialization?: Prisma.SortOrder;
    experienceYears?: Prisma.SortOrder;
    about?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TrainerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    specialization?: Prisma.SortOrder;
    experienceYears?: Prisma.SortOrder;
    about?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TrainerSumOrderByAggregateInput = {
    experienceYears?: Prisma.SortOrder;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type TrainerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    phone?: boolean;
    specialization?: boolean;
    experienceYears?: boolean;
    about?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["trainer"]>;
export type TrainerSelectScalar = {
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    phone?: boolean;
    specialization?: boolean;
    experienceYears?: boolean;
    about?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TrainerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "specialization" | "experienceYears" | "about" | "createdAt" | "updatedAt", ExtArgs["result"]["trainer"]>;
export type $TrainerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Trainer";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        specialization: string;
        experienceYears: number;
        about: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["trainer"]>;
    composites: {};
};
export type TrainerGetPayload<S extends boolean | null | undefined | TrainerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TrainerPayload, S>;
export type TrainerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TrainerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TrainerCountAggregateInputType | true;
};
export interface TrainerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Trainer'];
        meta: {
            name: 'Trainer';
        };
    };
    findUnique<T extends TrainerFindUniqueArgs>(args: Prisma.SelectSubset<T, TrainerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TrainerClient<runtime.Types.Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TrainerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TrainerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TrainerClient<runtime.Types.Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TrainerFindFirstArgs>(args?: Prisma.SelectSubset<T, TrainerFindFirstArgs<ExtArgs>>): Prisma.Prisma__TrainerClient<runtime.Types.Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TrainerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TrainerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TrainerClient<runtime.Types.Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TrainerFindManyArgs>(args?: Prisma.SelectSubset<T, TrainerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TrainerCreateArgs>(args: Prisma.SelectSubset<T, TrainerCreateArgs<ExtArgs>>): Prisma.Prisma__TrainerClient<runtime.Types.Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TrainerCreateManyArgs>(args?: Prisma.SelectSubset<T, TrainerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends TrainerDeleteArgs>(args: Prisma.SelectSubset<T, TrainerDeleteArgs<ExtArgs>>): Prisma.Prisma__TrainerClient<runtime.Types.Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TrainerUpdateArgs>(args: Prisma.SelectSubset<T, TrainerUpdateArgs<ExtArgs>>): Prisma.Prisma__TrainerClient<runtime.Types.Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TrainerDeleteManyArgs>(args?: Prisma.SelectSubset<T, TrainerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TrainerUpdateManyArgs>(args: Prisma.SelectSubset<T, TrainerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends TrainerUpsertArgs>(args: Prisma.SelectSubset<T, TrainerUpsertArgs<ExtArgs>>): Prisma.Prisma__TrainerClient<runtime.Types.Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.TrainerFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.TrainerAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends TrainerCountArgs>(args?: Prisma.Subset<T, TrainerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TrainerCountAggregateOutputType> : number>;
    aggregate<T extends TrainerAggregateArgs>(args: Prisma.Subset<T, TrainerAggregateArgs>): Prisma.PrismaPromise<GetTrainerAggregateType<T>>;
    groupBy<T extends TrainerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TrainerGroupByArgs['orderBy'];
    } : {
        orderBy?: TrainerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TrainerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TrainerFieldRefs;
}
export interface Prisma__TrainerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TrainerFieldRefs {
    readonly id: Prisma.FieldRef<"Trainer", 'String'>;
    readonly firstName: Prisma.FieldRef<"Trainer", 'String'>;
    readonly lastName: Prisma.FieldRef<"Trainer", 'String'>;
    readonly email: Prisma.FieldRef<"Trainer", 'String'>;
    readonly phone: Prisma.FieldRef<"Trainer", 'String'>;
    readonly specialization: Prisma.FieldRef<"Trainer", 'String'>;
    readonly experienceYears: Prisma.FieldRef<"Trainer", 'Int'>;
    readonly about: Prisma.FieldRef<"Trainer", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Trainer", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Trainer", 'DateTime'>;
}
export type TrainerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainerSelect<ExtArgs> | null;
    omit?: Prisma.TrainerOmit<ExtArgs> | null;
    where: Prisma.TrainerWhereUniqueInput;
};
export type TrainerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainerSelect<ExtArgs> | null;
    omit?: Prisma.TrainerOmit<ExtArgs> | null;
    where: Prisma.TrainerWhereUniqueInput;
};
export type TrainerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainerSelect<ExtArgs> | null;
    omit?: Prisma.TrainerOmit<ExtArgs> | null;
    where?: Prisma.TrainerWhereInput;
    orderBy?: Prisma.TrainerOrderByWithRelationInput | Prisma.TrainerOrderByWithRelationInput[];
    cursor?: Prisma.TrainerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TrainerScalarFieldEnum | Prisma.TrainerScalarFieldEnum[];
};
export type TrainerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainerSelect<ExtArgs> | null;
    omit?: Prisma.TrainerOmit<ExtArgs> | null;
    where?: Prisma.TrainerWhereInput;
    orderBy?: Prisma.TrainerOrderByWithRelationInput | Prisma.TrainerOrderByWithRelationInput[];
    cursor?: Prisma.TrainerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TrainerScalarFieldEnum | Prisma.TrainerScalarFieldEnum[];
};
export type TrainerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainerSelect<ExtArgs> | null;
    omit?: Prisma.TrainerOmit<ExtArgs> | null;
    where?: Prisma.TrainerWhereInput;
    orderBy?: Prisma.TrainerOrderByWithRelationInput | Prisma.TrainerOrderByWithRelationInput[];
    cursor?: Prisma.TrainerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TrainerScalarFieldEnum | Prisma.TrainerScalarFieldEnum[];
};
export type TrainerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainerSelect<ExtArgs> | null;
    omit?: Prisma.TrainerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TrainerCreateInput, Prisma.TrainerUncheckedCreateInput>;
};
export type TrainerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TrainerCreateManyInput | Prisma.TrainerCreateManyInput[];
};
export type TrainerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainerSelect<ExtArgs> | null;
    omit?: Prisma.TrainerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TrainerUpdateInput, Prisma.TrainerUncheckedUpdateInput>;
    where: Prisma.TrainerWhereUniqueInput;
};
export type TrainerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TrainerUpdateManyMutationInput, Prisma.TrainerUncheckedUpdateManyInput>;
    where?: Prisma.TrainerWhereInput;
    limit?: number;
};
export type TrainerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainerSelect<ExtArgs> | null;
    omit?: Prisma.TrainerOmit<ExtArgs> | null;
    where: Prisma.TrainerWhereUniqueInput;
    create: Prisma.XOR<Prisma.TrainerCreateInput, Prisma.TrainerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TrainerUpdateInput, Prisma.TrainerUncheckedUpdateInput>;
};
export type TrainerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainerSelect<ExtArgs> | null;
    omit?: Prisma.TrainerOmit<ExtArgs> | null;
    where: Prisma.TrainerWhereUniqueInput;
};
export type TrainerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrainerWhereInput;
    limit?: number;
};
export type TrainerFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type TrainerAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type TrainerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainerSelect<ExtArgs> | null;
    omit?: Prisma.TrainerOmit<ExtArgs> | null;
};
export {};
