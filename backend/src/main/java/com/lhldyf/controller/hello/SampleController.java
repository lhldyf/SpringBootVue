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
		return "Hello World!";
	}

	@RequestMapping("/users")
	@ResponseBody UserResult users(@RequestBody User condition) {
		System.out.println("query users");
		return addUser(condition);
	}

	@RequestMapping("/clearUsers")
	@ResponseBody String clearUsers() {
		System.out.println("clear users");
		users = new ArrayList<User>();
		return "OK";
	}


	private UserResult addUser(User condition) {
		UserResult result = new UserResult();
		int count = users.size();
		int id = count+1;
		int currentPage = condition.getCurrentPage();
		int pageSize = condition.getPageSize();
		if((currentPage-1)*pageSize > count) {
			// 只有一页时，只展示第一页
			currentPage = 1;
		}
		User user = new User(id, "lhldyf"+id, "罗辉"+id, id, "male");
		users.add(user);
		List<User> resultList = new ArrayList<User>();
		for( int i = users.size() - (currentPage-1)*pageSize -1 , j = pageSize-1 ; i >= 0 && j >=0 ; i--, j--) {
			resultList.add(users.get(i));
		}
		Page page = new Page();
		page.setCount(count+1);
		page.setCurrentPage(currentPage);
		page.setPageSize(pageSize);
		result.setPage(page);
		result.setUsers(resultList);
		return result;
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