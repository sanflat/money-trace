package com.moneytrace.object;

import java.util.Date;

public interface IHistory {
    String getType();
    String getCategory();
    int getAmount();
    Date getDate();

}
