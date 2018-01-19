package com.lhldyf.controller.hello;

import java.io.Serializable;

public class User implements Serializable {
	private long userId;
	private String userName;
	private String realName;
	private int age;
	private String sex;

	transient int currentPage = 1;

	transient int pageSize = 10;

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getRealName() {
		return realName;
	}

	public void setRealName(String realName) {
		this.realName = realName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public User() {

	}

	public User(long userId, String userName, String realName, int age, String sex) {
		this.userId = userId;
		this.userName = userName;
		this.realName = realName;
		this.age = age;
		this.sex = sex;
	}
}
