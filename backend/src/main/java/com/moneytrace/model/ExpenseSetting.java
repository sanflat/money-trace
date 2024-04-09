package com.moneytrace.model;

import jakarta.persistence.*;

import java.util.Date;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "expense_setting")
public class ExpenseSetting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "setting_id")    
    private long settingId;

    @Column(name = "categoryName", nullable = false, unique = true)
    private String categoryName;

    @Column(name = "created_date")
    @CreatedDate
    private Date createdDate;

    @Column(name = "updated_date")
    @LastModifiedDate
    private Date updatedDate;

    public ExpenseSetting(){
    }

    public ExpenseSetting(String categoryName, Date createdDate, Date updatedDate){
        super();
        this.categoryName = categoryName;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
    }

    public long getSettingId(){
        return settingId;
    }

    public String getCategoryName(){
        return categoryName;
    }

    public Date getCreatedDate(){
        return createdDate;
    }

    public Date getUpdatedDate(){
        return updatedDate;
    }

    public void setSettingId(long settingId){
        this.settingId = settingId;
    }

    public void setCategoryName(String categoryName){
        this.categoryName = categoryName;
    }

    public void setCreatedDate(Date createdDate){
        this.createdDate = createdDate;
    }

    public void setUpdatedDate(Date updatedDate){
        this.updatedDate = updatedDate;
    }
}