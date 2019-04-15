//
//  Bugs_MobileListForm.swift
//  Bugs_Mobile
//
//  Created by David Azancot on Fri, 23 Nov 2018 10:14:43 GMT
//  ©2018 My Company All rights reserved

import UIKit
import QMobileUI
import FoldingCell
import SwiftMessages
import Moya

class CustomCell: FoldingCell {

    override func awakeFromNib() {
        foregroundView.layer.cornerRadius = 10
        foregroundView.layer.masksToBounds = true
        super.awakeFromNib()
    }

    override func animationDuration(_ itemIndex: NSInteger, type _: FoldingCell.AnimationType) -> TimeInterval {
        let durations = [0.26, 0.2, 0.2]
        return durations[itemIndex]
    }
}

/// Generated list form for Bugs_Mobile table.
@IBDesignable

class ___TABLE___ListForm: ListFormTable {

    public override var tableName: String {
        return "___TABLE___"
    }

    enum Const {
        static let closeCellHeight: CGFloat = 179
        static let openCellHeight: CGFloat = 389
        static var rowsCount = 6
    }

    var cellHeights: [CGFloat] = []
    var unfolded: [IndexPath] = []

    private func setup() {
        cellHeights = Array(repeating: Const.closeCellHeight, count: Const.rowsCount)
        tableView.estimatedRowHeight = Const.closeCellHeight
        tableView.rowHeight = UITableView.automaticDimension
    }

    // MARK: Events
    override func onLoad() {

        setup()

        // SearchBar text style
        let blueColor = UIColor(red: 91/255, green: 180/255, blue: 175/255, alpha: 1.0)
        let textFieldInsideUISearchBar = searchBar.value(forKey: "searchField") as? UITextField
        textFieldInsideUISearchBar?.textColor = blueColor
        textFieldInsideUISearchBar?.font = UIFont(name: "HelveticaNeue-Thin", size: 15)

        // SearchBar placeholder style
        let textFieldInsideUISearchBarLabel = textFieldInsideUISearchBar!.value(forKey: "placeholderLabel") as? UILabel
        textFieldInsideUISearchBarLabel?.textColor = blueColor
        textFieldInsideUISearchBarLabel?.font = UIFont(name: "HelveticaNeue-Thin", size: 15)
        self.refreshControl?.tintColor = UIColor.white

            switch UIScreen.main.nativeBounds.height {
            case 1136:
                print("iPhone 5 or 5S or 5C")
                searchBar.placeholder = "Version, Summary or Bug number"

            default:
                print("other")
                searchBar.placeholder = "Search by task name"
            }
    }

    let vc = UIStoryboard(name: "___TABLE___ListForm", bundle: nil).instantiateViewController(withIdentifier: "Second") as! TableSearchController

    open override func onSearchBegin() {
        let checkEmptyTable = UserDefaults.standard.searchArray
        if !checkEmptyTable.isEmpty {
            addChildView()
        }
    }

    open override func onSearchFetching() {
        removeChildView()
    }

    open override func onSearchButtonClicked() {
        if let text = searchBar.text {
            var userDefault = UserDefaults.standard
            userDefault.appendSearchArray(text)
        }
        removeChildView()
    }

    open override func onSearchCancel() {
        removeChildView()
    }

    @objc func keyboardWillShow(_ notification: Notification) {
        if let keyboardFrame: NSValue = notification.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? NSValue {
            let keyboardRectangle = keyboardFrame.cgRectValue
            keyboardHeight = CGFloat(keyboardRectangle.height)
        }
    }

    var keyboardHeight = CGFloat()
    var totalHeight = CGFloat()

    func addChildView() {
        addChild(vc)
        vc.delegate = self
        self.view.addSubview(vc.view)
        self.tableView.isScrollEnabled = false
        vc.didMove(toParent: self)
        let nav = UINavigationController()
        let navHeight = nav.navigationBar.frame.size.height
        self.vc.view.frame.origin.y = self.tableView!.contentOffset.y + navHeight
        UIView.animate(withDuration: 0.5, delay: 0, usingSpringWithDamping: 1.0, initialSpringVelocity: 1, options: [.curveEaseOut], animations: {
            self.vc.view.frame.origin.y = self.tableView!.contentOffset.y + navHeight
        }, completion: nil)
    }

    func removeChildView() {
        let screenSize = UIScreen.main.bounds
        let screenHeight = CGFloat(screenSize.height)

        var frame = self.vc.view.frame
        frame.origin.y = UIScreen.main.bounds.maxY
        self.vc.view.frame = frame
        vc.willMove(toParent: nil)
        self.tableView.isScrollEnabled = true

        UIView.animate(withDuration: 0.8, delay: 0, usingSpringWithDamping: 1.0, initialSpringVelocity: 1, options: [.curveEaseOut], animations: {
            self.vc.view.frame.origin.y = screenHeight
        }) { _ in
            self.vc.view.removeFromSuperview()
            self.vc.removeFromParent()
        }
    }

    override func scrollViewDidScroll(_ scrollView: UIScrollView) {

        let contentOffset =  tableView.contentOffset.y
        let nav = UINavigationController()
        let navHeight = nav.navigationBar.frame.size.height
        let screenSize = UIScreen.main.bounds
        let width  = view.frame.width
        totalHeight = screenSize.height - keyboardHeight - navHeight
        self.vc.view.frame = CGRect(x: 0, y: -screenSize.height, width: width, height: self.totalHeight)
        vc.view.frame.origin.y = contentOffset + navHeight
        UIView.animate(withDuration: 0.5, delay: 0, usingSpringWithDamping: 1.0, initialSpringVelocity: 1, options: [.curveEaseOut], animations: {
            self.vc.view.frame.origin.y = contentOffset + navHeight
        }, completion: nil)
    }

    override func onWillAppear(_ animated: Bool) {
        // Pull to refresh Z position
        self.refreshControl!.layer.zPosition = -1
        if self.refreshControl?.isRefreshing == true {
            let offset = self.tableView.contentOffset

            // Relaunch Pull to refresh animation
            self.refreshControl?.endRefreshing()
            self.refreshControl?.beginRefreshing()
            self.tableView.contentOffset = offset
        }
    }

    override func onDidAppear(_ animated: Bool) {
        //Check if tableView is empty
    }

    override func onWillDisappear(_ animated: Bool) {
        // Called when the view is dismissed, covered or otherwise hidden. Default does nothing
    }

    override func onDidDisappear(_ animated: Bool) {
        // Called after the view was dismissed, covered or otherwise hidden. Default does nothing
    }
}

extension ___TABLE___ListForm {

    override func tableView(_: UITableView, willDisplay cell: UITableViewCell, forRowAt indexPath: IndexPath) {
      //  super.tableView(tableView, willDisplay: cell, forRowAt: indexPath)
        guard case let cell as CustomCell = cell else {
            return
        }
        cell.backgroundColor = .clear
        cell.unfold(unfolded.contains(indexPath), animated: false, completion: nil)
    }

    override func tableView(_: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return unfolded.contains(indexPath) ? Const.openCellHeight: Const.closeCellHeight
    }

    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {

        let cell = tableView.cellForRow(at: indexPath) as! FoldingCell
        if cell.isAnimating() {
            return
        }

        var duration = 0.0
        let cellIsCollapsed = !unfolded.contains(indexPath)
        if cellIsCollapsed {

            unfolded.append(indexPath)
            cell.unfold(true, animated: true, completion: nil)
            duration = 0.5
        } else {

            if let index = unfolded.index(of: indexPath) {
                unfolded.remove(at: index)
            }
            cell.unfold(false, animated: true, completion: nil)
            duration = 0.8
        }

        UIView.animate(withDuration: duration, delay: 0, options: .curveEaseOut, animations: { () -> Void in
            tableView.beginUpdates()
            tableView.endUpdates()
        }, completion: nil)
    }
}

class TableSearchController: UITableViewController {

    weak var delegate: TableSearchControllerDelegate?

    var tableContent = [String]()

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return tableContent.count
    }

    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell: UITableViewCell = tableView.dequeueReusableCell(withIdentifier: "Cell", for: indexPath)
        cell.textLabel?.text = tableContent[indexPath.row]
        return cell
    }

    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let selectedText = tableContent[indexPath.row]
        UIApplication.shared.sendAction("resignFirstResponder", to:nil, from:nil, for:nil)

        self.delegate?.textSelected(selectedText)
    }

    override func tableView(_ tableView: UITableView, canEditRowAt indexPath: IndexPath) -> Bool {
        return true
    }

    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCell.EditingStyle, forRowAt indexPath: IndexPath) {
        if (editingStyle == .delete) {
            tableContent.remove(at: indexPath.row)
            tableView.deleteRows(at: [indexPath], with: .fade)

            DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
                UserDefaults.standard.searchArray.remove(at: indexPath.row)
                self.tableContent = UserDefaults.standard.searchArray
            }
        }
    }

    override func viewDidAppear(_ animated: Bool) {
        tableContent = UserDefaults.standard.searchArray
        self.tableView.reloadData()
    }
    override func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
}

protocol TableSearchControllerDelegate: NSObjectProtocol {
    func textSelected(_ text: String)
}

extension ___TABLE___ListForm: TableSearchControllerDelegate {

    func textSelected(_ text: String) {

        self.searchBar?.text = text
        self.searchBar(self.searchBar, textDidChange: text)

        // XXX maybe force perform search

        self.dataSource.performFetch()

        onSearchCancel()
    }
}

protocol SearchArray {
    var searchArray: [String] {get set}
}
extension SearchArray {
    mutating func appendSearchArray(_ text: String) {
        var array = self.searchArray
        if array.contains(text) {
            let newval = array.firstIndex(of: text)
            array.remove(at: newval!)
        }
        if array.count > 20 {
            array.removeLast()
        }
        array.insert(text, at: 0)
        self.searchArray = array
        logger.info("Search array \(array)")
    }
}

private let kSearchArray = "searchArray"
extension UserDefaults: SearchArray {

    var searchArray: [String] {
        get {
            let objects = self.object(forKey: kSearchArray)
            return objects as? [String] ?? [String]()
        }
        set {
            self.set(newValue, forKey: kSearchArray)
            self.synchronize()
        }
    }
}
