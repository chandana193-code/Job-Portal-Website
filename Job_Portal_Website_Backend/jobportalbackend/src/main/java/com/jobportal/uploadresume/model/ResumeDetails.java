package com.jobportal.uploadresume.model;

import java.util.Arrays;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "USER_RESUME_DETAILS")
public class ResumeDetails {

	@Id
	@Column(name = "ID")
	private int id;
	@Column(name = "USER_NAME")
	private String userName;
	@Column(name = "FILE_NAME")
	private String fileName;
	@Column(name = "FILE_TYPE")
	private String fileType;
	@Lob
	@Column(name = "FILE_DATA",columnDefinition = "LONGBLOB")
	private byte[] fileData;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	public byte[] getFileData() {
		return fileData;
	}

	public void setFileData(byte[] fileData) {
		this.fileData = fileData;
	}

	@Override
	public String toString() {
		return "ResumeDetails [id=" + id + ", userName=" + userName + ", fileName=" + fileName + ", fileType="
				+ fileType + ", fileData=" + Arrays.toString(fileData) + "]";
	}

}
