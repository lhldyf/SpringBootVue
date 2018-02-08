package com.lhldyf.controller.hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class SampleController {

	List<User> users = new ArrayList<User>();

	@RequestMapping("/")
	@ResponseBody
	String home() {
		return "Hello World~";
	}

	@RequestMapping("/user/list")
	@ResponseBody UserResult queryList(@RequestBody User condition) {
		UserResult result = new UserResult();
		List<User> tempUsers = new ArrayList<User>();
		for( User user: users) {
			if(0 != condition.getUserId() ) {
				if(user.getUserId() == condition.getUserId()) {
					tempUsers.add(user);
				}
			} else {
				tempUsers.add(user);
			}
		}

		List<User> resultUsers = new ArrayList<User>();
		for( User user: tempUsers) {
			if(null != condition.getSex() && !"".equals(condition.getSex())) {
				if(condition.getSex().equals(user.getSex())) {
					resultUsers.add(user);
				}
			} else {
				resultUsers.add(user);
			}
		}

		int count = resultUsers.size();
		int currentPage = condition.getCurrentPage();
		int pageSize = condition.getPageSize();
		if((currentPage-1)*pageSize > count) {
			// 只有一页时，只展示第一页
			currentPage = 1;
		}
		List<User> resultList = new ArrayList<User>();
		for( int i = resultUsers.size() - (currentPage-1)*pageSize -1 , j = pageSize-1 ; i >= 0 && j >=0 ; i--, j--) {
			resultList.add(resultUsers.get(i));
		}
		Page page = new Page();
		page.setCount(count);
		page.setCurrentPage(currentPage);
		page.setPageSize(pageSize);
		result.setPage(page);
		result.setUsers(resultList);
		return result;
	}

	@RequestMapping("/user/create")
	@ResponseBody Result create(@RequestBody User user) {
		user.setUserId(users.size()+1);
		users.add(user);
		return new Result();
	}

	@RequestMapping("/user/modify")
	@ResponseBody Result modify(@RequestBody User user) {
		for( int i = 0 ; i < users.size() ; i++ ) {
			if(user.getUserId() == users.get(i).getUserId()) {
				users.set(i, user);
			}
		}
		return new Result();
	}

	class Result {
		private boolean success = true;

		public boolean isSuccess() {
			return success;
		}

		public void setSuccess(boolean success) {
			this.success = success;
		}
	}


	class UserResult {
		private List<User> users;
		private Page page;
		public List<User> getUsers() {
			return users;
		}

		public void setUsers(List<User> users) {
			this.users = users;
		}

		public Page getPage() {
			return page;
		}

		public void setPage(Page page) {
			this.page = page;
		}
	}


	class Page {
		protected int currentPage = 1;
		protected int pageSize = 10;
		protected long count;
		protected int pages;
		protected int index;

		public Page() {
		}

		public int getCurrentPage() {
			return this.currentPage;
		}

		public void setCurrentPage(int currentPage) {
			this.currentPage = currentPage;
		}

		public int getPageSize() {
			return this.pageSize;
		}

		public void setPageSize(int pageSize) {
			this.pageSize = pageSize;
		}

		public long getCount() {
			return this.count;
		}

		public void setCount(long count) {
			this.count = count;
			if (count > 0L) {
				this.pages = (int)(this.count / (long)this.pageSize);
				if (this.count % (long)this.pageSize > 0L) {
					++this.pages;
				}

				this.index = (this.currentPage - 1) * this.pageSize;
			}

		}

		public int getPages() {
			return this.pages;
		}

		public int getIndex() {
			return this.index;
		}
	}


}