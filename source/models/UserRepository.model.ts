import {
    Table,
    Column,
    Model,
    PrimaryKey,
    CreatedAt,
    UpdatedAt,
    AutoIncrement,
    Unique
} from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: 'users'
})
export default class UserRepository extends Model<UserRepository> {

    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id!: number;

    @Column
    name!: string;

    @Unique
    @Column
    email!: string;

    @Column
    password!: string;

    @UpdatedAt
    @Column
    updatedAt!: Date;

    @CreatedAt
    @Column
    createdAt!: Date;

}