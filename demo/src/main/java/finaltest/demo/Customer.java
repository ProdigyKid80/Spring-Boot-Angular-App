package finaltest.demo;

import java.time.LocalDate;

public class Customer {
	private Long id;
	private String name;
	private String surname;
	private LocalDate dob;
	private String phone;
	private String email;

	public Customer() {}
	
	public Customer(Long id,
					String name,
					String surname,
					LocalDate dob,
					String phone,
					String email) {
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.dob = dob;
		this.phone = phone;
		this.email = email;
	}
	
	public Customer(String name,
					String surname,
					LocalDate dob,
					String phone,
					String email) {
		this.name = name;
		this.surname = surname;
		this.dob = dob;
		this.phone = phone;
		this.email = email;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", name=" + name + ", surname=" + surname + ", dob=" + dob + ", phone=" + phone
				+ ", email=" + email + "]";
	}
	
}
