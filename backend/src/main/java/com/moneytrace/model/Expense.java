package com.moneytrace.model;

import jakarta.persistence.*;
import java.util.Date;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "expenses")
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "setting_id", nullable = false)
    private int settingId;

    @Column(name = "amount", nullable = false)
    private int amount;

    @Column(name = "created_date", updatable = false)
    @CreatedDate
    private Date createdDate;

    @Column(name = "updated_date")
    @LastModifiedDate
    private Date updatedDate;

    @ManyToOne
    @JoinColumn(name = "setting_id", insertable = false, updatable = false)
    private ExpenseSetting expenseSetting;

    public Expense(){
    }

    public Expense(int settingId, int amount, Date createdDate, Date updatedDate){
        super();
        this.settingId = settingId;
        this.amount = amount;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
    }

    public long getId(){
        return id;
    }

    public int getSettingId(){
        return settingId;
    }

    public int getAmount(){
        return amount;
    }

    public Date getCreatedDate(){
        return createdDate;
    }

    public Date getUpdatedDate(){
        return updatedDate;
    }

    public ExpenseSetting getExpenseSetting(){return expenseSetting;}

    public void setId(long id){
        this.id = id;
    }

    public void setSettingId(int settingId){
        this.settingId = settingId;
    }

    public void setAmount(int amount){
        this.amount = amount;
    }

    public void setCreatedDate(Date createdDate){
        this.createdDate = createdDate;
    }

    public void setUpdatedDate(Date updatedDate){
        this.updatedDate = updatedDate;
    }

    public void setExpenseSetting(ExpenseSetting expenseSetting){this.expenseSetting = expenseSetting;}
}