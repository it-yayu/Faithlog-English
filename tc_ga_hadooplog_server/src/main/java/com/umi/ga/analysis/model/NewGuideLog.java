package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;
import com.umi.ga.utils.DateForm;

public class NewGuideLog extends BaseEntity{

	private static final long serialVersionUID = -5902603509874170318L;
	private Integer gameId;

	private String channelId;

	private String mediaId;

	private String deviceId;

	private String versionName;

	private String versionCode;
	private String accountId;

	private String serverId;

	private String logTime;

	private String roleId;

	private String roleName;

	private Integer roleLevel;

	private Integer roleGender;

	private Long rolePower;

	private String roleType;

	private Integer vipLevel;

	private String logName;

	private  String stepId;

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public Integer getGameId() {
		return gameId;
	}

	public void setGameId(Integer gameId) {
		this.gameId = gameId;
	}

	public String getChannelId() {
		return channelId;
	}

	public void setChannelId(String channelId) {
		this.channelId = channelId;
	}

	public String getMediaId() {
		return mediaId;
	}

	public void setMediaId(String mediaId) {
		this.mediaId = mediaId;
	}

	public String getDeviceId() {
		return deviceId;
	}

	public void setDeviceId(String deviceId) {
		this.deviceId = deviceId;
	}

	public String getVersionName() {
		return versionName;
	}

	public void setVersionName(String versionName) {
		this.versionName = versionName;
	}

	public String getVersionCode() {
		return versionCode;
	}

	public void setVersionCode(String versionCode) {
		this.versionCode = versionCode;
	}

	public String getaccountId() {
		return accountId;
	}

	public void setaccountId(String accountId) {
		this.accountId = accountId;
	}

	public String getServerId() {
		return serverId;
	}

	public void setServerId(String serverId) {
		this.serverId = serverId;
	}

	public String getLogTime() {
		return logTime;
	}

	public void setLogTime(String logTime) {
		this.logTime = logTime;
	}

	public String getRoleId() {
		return roleId;
	}

	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public Integer getRoleLevel() {
		return roleLevel;
	}

	public void setRoleLevel(Integer roleLevel) {
		this.roleLevel = roleLevel;
	}

	public Integer getRoleGender() {
		return roleGender;
	}

	public void setRoleGender(Integer roleGender) {
		this.roleGender = roleGender;
	}

	public Long getrolePower() {
		return rolePower;
	}

	public void setrolePower(Long rolePower) {
		this.rolePower = rolePower;
	}

	public String getRoleType() {
		return roleType;
	}

	public void setRoleType(String roleType) {
		this.roleType = roleType;
	}

	public Integer getVipLevel() {
		return vipLevel;
	}

	public void setVipLevel(Integer vipLevel) {
		this.vipLevel = vipLevel;
	}

	public String getLogName() {
		return logName;
	}

	public void setLogName(String logName) {
		this.logName = logName;
	}

	public String getstepId() {
		return stepId;
	}

	public void setstepId(String stepId) {
		this.stepId = stepId;
	}

	@Override
	public String toString() {
		return "NewGuideLog{" +
				"gameId=" + gameId +
				", channelId=" + channelId +
				", mediaId='" + mediaId + '\'' +
				", deviceId='" + deviceId + '\'' +
				", versionName='" + versionName + '\'' +
				", versionCode='" + versionCode + '\'' +
				", accountId='" + accountId + '\'' +
				", serverId='" + serverId + '\'' +
				", logTime=" + logTime +
				", roleId='" + roleId + '\'' +
				", roleName='" + roleName + '\'' +
				", roleLevel=" + roleLevel +
				", roleGender=" + roleGender +
				", rolePower=" + rolePower +
				", roleType='" + roleType + '\'' +
				", vipLevel=" + vipLevel +
				", logName='" + logName + '\'' +
				", stepId='" + stepId + '\'' +
				'}';
	}
}